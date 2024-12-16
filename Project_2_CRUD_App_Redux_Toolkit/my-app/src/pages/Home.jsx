import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>The Power of the Written Word</h1>
      <p>
        Books, those silent companions that have entertained, educated, and
        inspired generations, hold a special place in the hearts of many. They
        are portals to different worlds, allowing us to travel through time and
        space, experience diverse cultures, and encounter extraordinary
        characters. Within their pages, we find solace, knowledge, and a sense
        of wonder. Whether it&apos;s a thrilling adventure, a heartwarming
        romance, or a thought-provoking non-fiction work, books have the power
        to ignite our imaginations, broaden our perspectives, and enrich our
        lives.
      </p>
      <p>
        From ancient scrolls to modern e-books, books have evolved over
        centuries, adapting to changing times while preserving their core
        essence. They are a testament to human creativity, a record of our
        history, and a reflection of our aspirations. In a world filled with
        distractions, books offer a quiet refuge, a chance to escape the noise
        and immerse ourselves in a captivating story. They are a source of
        comfort, a tool for learning, and a catalyst for personal growth. So,
        let us cherish these invaluable treasures, for in the pages of a book,
        we find a universe of possibilities.
      </p>
      <Link to="/showbooks">
        <button className="act-btn">Explore</button>
      </Link>
    </div>
  );
};

export default Home;
