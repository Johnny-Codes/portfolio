const musingsData = [
  {
    id: 1,
    title: "Musing 1",
    date: "2021-01-01",
    shortContent: "This is a musing",
    content: "This is a musing",
  },
];

const Musings = () => {
  return (
    <div className="flex flex-col">
      {musingsData.map((musing) => (
        <div key={musing.id}>
          <h2>{musing.title}</h2>
          <p>{musing.date}</p>
          <p>{musing.shortContent}</p>
        </div>
      ))}
    </div>
  );
};

export default Musings;
