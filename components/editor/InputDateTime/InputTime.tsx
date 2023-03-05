import classNames from "classnames";
import { ComponentProps, PropsWithChildren, useRef, useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import DatePicker from "react-datepicker";
import s from "./InputTime.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage } from "../../ErrorMessage";

const range = (start: number, stop: number, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

interface InputTimeProps extends ComponentProps<"input"> {
  onlyView?: JSX.Element;
  defaultText: string;
  className?: string;
  errors?: string;
}

export function InputTime({
  onlyView,
  defaultText,
  className,
  errors,
}: PropsWithChildren<InputTimeProps>): JSX.Element {
  const [editing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultText);

  const [date, handleDateChange] = useState<Date | null>(new Date());

  const wrapperRef = useRef(null);

  if (onlyView) return onlyView;

  return (
    <>
      {editing ? (
        <>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            ref={wrapperRef}
            className={classNames(className)}
          />
          {<ErrorMessage errors={errors} />}
        </>
      ) : (
        <div
          className={classNames(className)}
          onClick={() => setEditing((prev) => !prev)}
        >
          {value}
        </div>
      )}
    </>
  );
}
