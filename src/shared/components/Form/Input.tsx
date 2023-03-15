import React, { forwardRef } from "react";
import { ChangeHandler, Controller } from "react-hook-form";
import Select from "react-select";
import { useTheme } from "../../../context/themeStore";
import { customStyles } from "../../utils/selectCustomStyles";

type OptionSelect = {
  value: string;
  label: string;
};

type Props = {
  type: "password" | "text" | "textarea" | "email" | "select";
  placeholder?: string;
  isMulti?: boolean;
  id: string;
  half: boolean;
  label: string;
  error: string | undefined;
  control?: any;
  name?: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<any>;
  options?: OptionSelect[];
};

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  let component =
    props.type === "select" ? (
      <Controller
        name={props.id}
        control={props.control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            onChange={onChange}
            isMulti={props.isMulti}
            onBlur={onBlur}
            value={value}
            ref={ref}
            styles={{
              ...customStyles,
            }}
            isClearable
            isSearchable
            options={props.options}
          />
        )}
      />
    ) : (
      <input
        type="text"
        id={props.id}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={ref}
        className="w-full py-2 px-4 text-gray-500 focus:text-gray-700  font-medium rounded-lg shadow-md outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      />
    );
  return (
    <div className={`${props.half ? "w-1/2" : "w-full"}`}>
      <label
        htmlFor={`${props.id}`}
        className={`${
          useTheme().dark ? "text-slate-200" : "text-gray-500"
        } block pb-1 pl-1  font-medium`}
      >
        {props.label}
      </label>
      {component}
      {props.error && <p className="text-red-400">{props.error}</p>}
    </div>
  );
});

export default Input;
