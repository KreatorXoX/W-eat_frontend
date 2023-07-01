import React, { forwardRef } from "react";
import { ChangeHandler, Controller } from "react-hook-form";
import Select from "react-select";
import { FiAlertTriangle } from "react-icons/fi";
import { useTheme } from "../../../context/themeStore";
import { customStyles } from "../../../utils/selectCustomStyles";

type Props = {
  type:
    | "password"
    | "text"
    | "number"
    | "textarea"
    | "email"
    | "select"
    | "radio";
  placeholder?: string;
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
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
  disabled?: boolean;
  inputVal?: number | string;
};

const Input = forwardRef<HTMLInputElement & HTMLTextAreaElement, Props>(
  (props, ref) => {
    let component =
      props.type === "text" ||
      props.type === "email" ||
      props.type === "number" ||
      props.type === "password" ? (
        <input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          min={props.type === "number" ? 0 : undefined}
          step={0.01}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={ref}
          disabled={props.disabled}
          className="placeholder:text-zinc-400/85 w-full rounded-lg border border-gray-400 py-2 px-4 font-medium text-gray-900 outline-none focus:border-transparent focus:bg-gray-200 
        focus:ring-2
        focus:ring-blue-400
        focus:ring-opacity-75
        disabled:italic disabled:text-gray-600
        dark:disabled:bg-gray-400
        dark:disabled:text-gray-700
        "
        />
      ) : props.type === "textarea" ? (
        <textarea
          id={props.id}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          rows={3}
          ref={ref}
          disabled={props.disabled}
          className="placeholder:text-zinc-400/85 w-full rounded-lg border border-gray-400 py-2 px-4 font-medium text-gray-900 outline-none focus:border-transparent focus:bg-gray-200 
        focus:ring-2
        focus:ring-blue-400
        focus:ring-opacity-75
        disabled:italic disabled:text-gray-600
        "
        />
      ) : props.type === "radio" ? (
        <input
          type="radio"
          id={props.id}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.inputVal}
          ref={ref}
          disabled={props.disabled}
          className="placeholder:text-zinc-400/85 w-full rounded-lg border border-gray-400 py-2 px-4 font-medium text-gray-900 outline-none focus:border-transparent focus:bg-gray-200 
        focus:ring-2
        focus:ring-blue-400
        focus:ring-opacity-75
        disabled:italic disabled:text-gray-600
        "
        />
      ) : (
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
                isClearable={props.isClearable}
                isSearchable={props.isSearchable}
                hideSelectedOptions={true}
                options={props.options}
                maxMenuHeight={130}
              />
            );
          }}
          name={props.id}
          control={props.control}
        />
      );
    return (
      <div
        className={`${props.half ? "w-1/2" : "w-full"} text-sm md:text-base`}
      >
        <label
          htmlFor={`${props.id}`}
          className={`${
            useTheme().dark ? "text-slate-200" : "text-gray-600"
          } block pb-1 pl-1  font-medium`}
        >
          {props.label}
        </label>
        {component}
        {props.error && (
          <p className="mt-1 flex flex-row items-baseline gap-1 text-red-600">
            <span>
              <FiAlertTriangle className="inline" />
            </span>
            <span>{props.error}</span>
          </p>
        )}
      </div>
    );
  }
);

export default Input;
