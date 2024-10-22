import Bookmark from "./Bookmark";
const Bookmarks = ({bookmarks,reading}) => {
    return (
        <div className="w-[30%] mt-8 bg-slate-200 rounded-xl">
            <h2 className="text-2xl font-bold p-2">Spent Time On Read: {reading} min</h2>
            <h2 className="text-3xl font-bold p-2">Bookmarks: {bookmarks.length}</h2 >
            {
                bookmarks.map(blog => <Bookmark blog={blog}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;