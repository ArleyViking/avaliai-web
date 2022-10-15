import { Copy } from "phosphor-react";
import "./styles.scss";
import { Checkbox } from "@mui/material";
import { useState } from "react";

export function ItemVerCard({ ask }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="ItemVerCard">
      <div className="check">
        <Checkbox
          checked={checked}
          onChange={handleChange}
          id="checkbox"
          sx={{
            color: "rgba(9, 3, 28, 0.4)",
            "&.Mui-checked": {
              color: "#5500df",
            },
          }}
        />
        <label
          style={
            checked
              ? { textDecorationLine: "line-through", color: "#6c40ea" }
              : {}
          }
          htmlFor="checkbox"
        >
          {ask}
        </label>
      </div>
      <Copy weight="fill" size={24} />
    </div>
  );
}
