import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function Calendar(props: {
  value: string,
  onChange: (value: string) => void,
}) {
  return (
    <ReactCalendar
      value={new Date(props.value)}
      onChange={(value: Value) => {
        if (value instanceof Date) {
          props.onChange(value.toString());
        } else {
          throw new Error("unsupported");
        }
      }}
    />
  );
}
