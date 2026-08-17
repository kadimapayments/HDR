"use client";

import { useState } from "react";
import { formatPhoneNumber } from "@/lib/utils";

interface PhoneInputProps {
  id?: string;
  name?: string;
  required?: boolean;
  className?: string;
  defaultValue?: string;
}

export function PhoneInput({ id, name = "phone", required, className, defaultValue = "" }: PhoneInputProps) {
  const [value, setValue] = useState(() => formatPhoneNumber(defaultValue));

  return (
    <input
      id={id}
      name={name}
      type="tel"
      required={required}
      className={className}
      value={value}
      onChange={(e) => setValue(formatPhoneNumber(e.target.value))}
      placeholder="(555) 123-4567"
      maxLength={14}
    />
  );
}
