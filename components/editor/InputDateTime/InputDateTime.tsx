import classNames from "classnames";
import {
  ComponentProps,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import DatePicker from "react-datepicker";
import s from "./InputDateTime.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage } from "../../ErrorMessage";

const range = (start: number, stop: number, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

interface InputDateTimeProps {
  onlyView?: JSX.Element;
  defaultText: string;
  className?: string;
  errors?: string;
  onChange?: (value: Date | null) => void;
}

export function InputDateTime({
  onlyView,
  defaultText,
  className,
  errors,
  onChange,
}: PropsWithChildren<InputDateTimeProps>): JSX.Element {
  const [editing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultText);

  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const years = range(1990, new Date().getFullYear() + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const wrapperRef = useRef(null);

  const handleClick = () => {
    setEditing((prev) => !prev);
  };

  const handleUpdateValue = useCallback((date: Date | null) => {
    setStartDate(date);
    onChange?.(date);
  }, []);

  if (onlyView) return onlyView;

  return (
    <div className="flex flex-col w-full">
      {editing ? (
        <div className="flex flex-cols">
          <DatePicker
            ref={wrapperRef}
            className={classNames(className)}
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }: any) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  {"<"}
                </button>
                <select
                  value={new Date(date).getFullYear()}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={months[new Date(date).getMonth()]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  {">"}
                </button>
              </div>
            )}
            selected={startDate}
            onChange={handleUpdateValue}
          />
        </div>
      ) : (
        <div className={classNames(className)} onClick={handleClick}>
          {value}
        </div>
      )}
      {<ErrorMessage errors={errors} />}
    </div>
  );
}
