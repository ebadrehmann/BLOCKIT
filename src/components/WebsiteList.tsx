function WebsiteList() {
  return (
    <ul className="list-group">
      <li className="list-group-item mt-4 py-1">
        <div className="d-flex justify-content-between">
          <p className="mb-0">name@example.com</p>
          <div className="d-flex justify-content-end gap-2">
            <button type="button" className="btn btn-outline-danger btn-sm">
              -
            </button>
            <button type="button" className="btn btn-outline-success btn-sm">
              +
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default WebsiteList;
