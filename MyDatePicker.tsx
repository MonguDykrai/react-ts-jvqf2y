import React, {
  useEffect,
  useMemo,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import type { DatePickerProps as AntDatePickerProps } from 'antd/lib/date-picker';
import 'antd/dist/antd.css';

type DatePickerProps = AntDatePickerProps & {};

const DatePicker = forwardRef<{}, DatePickerProps>(({ allowClear }, ref) => {
  return (
    <div>
      <AntDatePicker
        onChange={() => {}}
        onPanelChange={() => {}}
        allowClear={allowClear}
        showToday={true}
        // disabledDate={(current) => {
        //   return (
        //     current
        //   );
        // }}
        // defaultValue={moment()}
      />
    </div>
  );
});

export default DatePicker;
