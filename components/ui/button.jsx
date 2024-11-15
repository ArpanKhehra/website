"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary text-white hover:bg-opacity-90",
  secondary: "bg-secondary text-primary hover:bg-opacity-90",
  tertiary: "bg-tertiary text-primary hover:bg-opacity-90",
};

const sizes = {
  sm: "px-4 py-2",
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  icon: Icon,
  iconPosition = "left",
  ...props
}) => {
  const buttonClasses = cn(
    "font-lato inline-flex items-center justify-center rounded-full transition-colors duration-200 text-primary",
    variants[variant],
    sizes[size],
    Icon && (iconPosition === "right" ? "flex-row-reverse" : "flex-row"),
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="mr-2 h-5 w-5" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="ml-2 h-5 w-5" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
