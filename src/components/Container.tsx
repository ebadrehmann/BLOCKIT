import WebsiteList from "./WebsiteList";
import { useState, type ChangeEvent } from "react";

const Container = () => {
  const [url, setUrl] = useState("");
  const [list, setList] = useState<string[]>([]);

  function readInput(event: ChangeEvent<HTMLInputElement>) {
    setUrl(event.currentTarget.value);
  }

  function addSite(event: React.MouseEvent<HTMLButtonElement>) {
    setList([...list, url]);
  }

  function onSubmit() {}
  return (
    <>
      {console.log(url)}
      <div className="min-vh-100 d-flex">
        <div className="container w-50 bg-secondary-subtle rounded p-3 my-3">
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput"
              onChange={readInput}
              value={url}
            ></input>
            <button
              type="button"
              className="btn btn-outline-primary btn-md"
              onClick={addSite}
            >
              Add
            </button>
          </div>

          <WebsiteList />
        </div>
      </div>
    </>
  );
};

export default Container;
