function Filter({ changeHnalder }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          changeHnalder(e);
        }}
      />
    </div>
  );
}

export default Filter;
