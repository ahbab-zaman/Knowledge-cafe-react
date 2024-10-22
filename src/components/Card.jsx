const Card = ({ card, handleBookmark,handleReadingTime }) => {
  const {
    cover,
    author_image,
    author_title,
    release_date,
    description,
    reading_time,
    hash_tags,
  } = card;
  return (
    <div>
      <img className="w-full rounded-xl" src={cover} />
      <div className="flex justify-between">
        <div
          className="flex items-center gap-3 mt-3
            "
        >
          <img className="w-[50px]" src={author_image} alt="" />
          <div>
            <h2 className="text-lg font-semibold">{author_title}</h2>
            <p className="text-sm text-gray-600">{release_date}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-gray-500">{reading_time} min read</p>
          <button onClick={()=>handleBookmark(card)}><i class="fa-regular fa-bookmark text-gray-500"></i></button>
        </div>
      </div>
      <p className="text-2xl font-bold">{description}</p>
      <p className="space-x-5">
        {hash_tags.map((tag,idx) => (
          <span key={idx} className="text-gray-800">{tag}</span>
        ))}
      </p>
      <a onClick={()=>handleReadingTime(reading_time)} className="link link-primary">Mark as read</a>
    </div>
  );
};

export default Card;
