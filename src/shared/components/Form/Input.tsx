import React, { forwardRef } from "react";
import { ChangeHandler, Controller } from "react-hook-form";
import Select from "react-select";
import { FiAlertTriangle } from "react-icons/fi";
import { useTheme } from "../../../context/themeStore";
import { customStyles } from "../../utils/selectCustomStyles";

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
        render={({ field: { onChange, onBlur, value, ref } }) => {
          return (
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
              hideSelectedOptions={true}
              options={props.options}
            />
          );
        }}
        name={props.id}
        control={props.control}
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
    <div className={`${props.half ? "w-1/2" : "w-full"} text-sm md:text-base`}>
      <label
        htmlFor={`${props.id}`}
        className={`${
          useTheme().dark ? "text-slate-200" : "text-gray-500"
        } block pb-1 pl-1  font-medium`}
      >
        {props.label}
      </label>
      {component}
      {props.error && (
        <p className="text-red-600 flex flex-row items-baseline gap-1 mt-1">
          <p>
            <FiAlertTriangle className="inline" />
          </p>
          <span>{props.error}</span>
        </p>
      )}
    </div>
  );
});

export default Input;
