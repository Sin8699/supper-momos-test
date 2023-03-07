import classNames from "classnames";
import {
  ChangeEvent,
  ComponentProps,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { ErrorMessage } from "../../ErrorMessage";
import { InputView } from "../InputView";

import s from "./InputArea.module.scss";

interface InputAreaProps extends ComponentProps<"textarea"> {
  onlyView?: boolean | ((v: unknown) => ReactNode);
  defaultText: string;
  className?: string;
  errors?: string;
  label?: string;
}

export function InputArea({
  onlyView,
  defaultText,
  className,
  errors,
  label,
  ...inputProps
}: PropsWithChildren<InputAreaProps>): JSX.Element {
  const [editing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  const wrapperRef = useRef(null);

  const handleClickOutside = () => {
    setEditing(false);
  };

  useOnClickOutside(wrapperRef, handleClickOutside);

  const handleChange = useCallback((e: any) => {
    const value = e.target.value;
    inputProps?.onChange?.(value as any);
    setValue(value);
  }, []);

  if (onlyView) return <InputView onlyView={onlyView} value={value} />;

  return (
    <>
      {label && <div className={s.label}>{label}</div>}
      {editing ? (
        <>
          <textarea
            className={classNames(className)}
            value={value}
            autoFocus
            ref={wrapperRef}
            onChange={handleChange as any}
          />
        </>
      ) : (
        <div
          className={classNames(className)}
          onClick={() => setEditing((prev) => !prev)}
        >
          {value || defaultText}
        </div>
      )}
      {<ErrorMessage errors={errors} />}
    </>
  );
}
