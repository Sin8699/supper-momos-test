import { useEffect, useRef } from "react";

type Handler = (event: Event) => void;

function useOnClickOutside<T extends HTMLElement | null>(ref: React.MutableRefObject<T>, handler: Handler) {
  const handlerRef = useRef<Handler>(handler);
  handlerRef.current = handler;

  useEffect(
    () => {
      const listener = (event: Event) => {
        if (event.target) {
          const willBeIgnored = (event.target as HTMLElement)?.closest(`#${useOnClickOutside.ignoreID}`);
          if (willBeIgnored) {
            return;
          }
        }

        // Do nothing if clicking ref's element or descendent elements
        if (
          !ref ||
          !ref.current ||
          (event.target instanceof Node && ref.current?.contains(event.target))
        ) {
          return;
        }

        handlerRef.current(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handlerRef],
  );
}

useOnClickOutside.ignoreID = "ignore-this-element";

export default useOnClickOutside;
