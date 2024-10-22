const Bookmark = ({blog}) => {
  const {description} = blog;
    return (
        <div className="p-2 rounded-xl">

            <h4 className="bg-white p-2 rounded-xl">{description}</h4>
        </div>
    );
};

export default Bookmark;