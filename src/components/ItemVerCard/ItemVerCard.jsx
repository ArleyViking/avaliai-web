import { Clipboard } from "phosphor-react";
import "./styles.scss";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

export function ItemVerCard({ ask, id }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notify = (result) => {
    if (result) toast("Item copiado com sucesso!", { className: "toast" });
    else toast("Item não copiado!", { className: "toast" });

    console.log(result);
  };

  return (
    <div className="ItemVerCard">
      <div className="check">
        <Checkbox
          checked={checked}
          onChange={handleChange}
          id={id}
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
          htmlFor={id}
        >
          {ask}
        </label>
      </div>
      <CopyToClipboard text={ask} onCopy={(_, result) => notify(result)}>
        <button>
          <Clipboard size={24} />
        </button>
      </CopyToClipboard>
    </div>
  );
}
