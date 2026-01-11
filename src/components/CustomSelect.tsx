"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import "@/styles/form.css";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface CustomSelectProps {
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  id?: string;
}

export default function CustomSelect({
  options,
  placeholder = "Select...",
  value = "",
  onChange,
  className = "",
  id,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0, width: 0 });

  const selectedOption = options.find((opt) => opt.value === value);
  const isPlaceholder = !value || !selectedOption;

  // Calculate menu position
  const updateMenuPosition = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, []);

  // Open/close handlers
  const handleToggle = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
      setHighlightedIndex(-1);
    } else {
      updateMenuPosition();
      setIsOpen(true);
      setHighlightedIndex(-1);
    }
  }, [isOpen, updateMenuPosition]);

  const handleSelect = useCallback(
    (optionValue: string, disabled?: boolean) => {
      if (disabled) return;
      onChange?.(optionValue);
      setIsOpen(false);
      setHighlightedIndex(-1);
      triggerRef.current?.focus();
    },
    [onChange]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          const option = options[highlightedIndex];
          if (option && !option.disabled) {
            handleSelect(option.value, option.disabled);
          }
        } else {
          handleToggle();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        triggerRef.current?.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (!isOpen) {
          handleToggle();
        } else {
          const nextIndex = highlightedIndex < options.length - 1 ? highlightedIndex + 1 : 0;
          setHighlightedIndex(nextIndex);
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (isOpen) {
          const prevIndex = highlightedIndex > 0 ? highlightedIndex - 1 : options.length - 1;
          setHighlightedIndex(prevIndex);
        }
      }
    },
    [isOpen, highlightedIndex, options, handleToggle, handleSelect]
  );

  // Click outside handler
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setHighlightedIndex(-1);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    updateMenuPosition();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, updateMenuPosition]);

  // Scroll highlighted option into view
  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && menuRef.current) {
      const optionElement = menuRef.current.children[highlightedIndex] as HTMLElement;
      if (optionElement) {
        optionElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [isOpen, highlightedIndex]);

  // Update position on scroll/resize
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => updateMenuPosition();
    const handleScroll = () => updateMenuPosition();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen, updateMenuPosition]);

  const menuId = id ? `${id}-menu` : `custom-select-menu-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      <div className={`form__selectCustom ${className}`}>
        <button
          ref={triggerRef}
          type="button"
          className={`form__selectTrigger ${isOpen ? "is-open" : ""} ${isPlaceholder ? "is-placeholder" : ""}`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={selectedOption ? selectedOption.label : placeholder}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
        >
          <span className="form__selectValue">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg
            className="form__selectChevron"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9L1 4h10z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {isOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <ul
            ref={menuRef}
            id={menuId}
            className="form__selectMenu"
            role="listbox"
            style={{
              position: "absolute",
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              width: `${menuPosition.width}px`,
            }}
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isHighlighted = index === highlightedIndex;
              const isDisabled = option.disabled;

              return (
                <li
                  key={option.value}
                  className={`form__selectOption ${isSelected ? "is-selected" : ""} ${isHighlighted ? "is-highlighted" : ""} ${isDisabled ? "is-disabled" : ""}`}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={isDisabled}
                  onClick={() => handleSelect(option.value, isDisabled)}
                  onMouseEnter={() => !isDisabled && setHighlightedIndex(index)}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>,
          document.body
        )}
    </>
  );
}

