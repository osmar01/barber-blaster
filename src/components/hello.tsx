function Hello({ person }: any) {
  return (
    <div>
      <span>{person.name}</span>
      <p>{person.msg} </p>
      <p>{person.lista}</p>
    </div>
  );
}

export default Hello;
