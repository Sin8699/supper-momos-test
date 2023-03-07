import classNames from "classnames";
import {
  ComponentProps,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import DatePicker from "react-datepicker";
import s from "./InputTime.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage } from "../../ErrorMessage";
import dayjs from "dayjs";
import { InputView } from "../InputView";

const range = (start: number, stop: number, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

interface InputTimeProps {
  onlyView?: boolean | ((v: unknown) => ReactNode);
  defaultText: string;
  className?: string;
  errors?: string;
  onChange?: (value: Date | null) => void;
}

export function InputTime({
  onlyView,
  defaultText,
  className,
  errors,
  onChange,
}: PropsWithChildren<InputTimeProps>): JSX.Element {
  const [editing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultText);

  const [date, handleDateChange] = useState<Date | null>(new Date());

  const wrapperRef = useRef(null);

  const handleUpdateValue = useCallback((date: Date | null) => {
    handleDateChange(date);
    onChange?.(date);
  }, []);

    if (onlyView && date)
      return (
        <InputView onlyView={onlyView} value={dayjs(date).format("h:mm A")} />
      );

  return (
    <div className="flex flex-col w-full">
      {editing ? (
        <>
          <DatePicker
            selected={date}
            onChange={handleUpdateValue}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            ref={wrapperRef}
            className={classNames(className)}
          />
        </>
      ) : (
        <div
          className={classNames(className)}
          onClick={() => setEditing((prev) => !prev)}
        >
          {value}
        </div>
      )}
      {<ErrorMessage errors={errors} />}
    </div>
  );
}
