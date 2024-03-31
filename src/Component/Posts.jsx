import PostsItem from "./PostsItem";

export default function Posts() {
  let postsList = [
    {
      img: "https://static.roocket.ir/images/cover/2023/12/1/oDeQGSRo3mEnYF3BAkI1koRxuKIqUFTKo0HIH2e1.jpg",
      title: "HTML",
      details:
        "Every webpage in the world (even this one), is built with HTML. Want to make your own websites? Or optimize web pages with great SEO? Then this is the perfect place to start.",
    },
    {
      img: "https://static.roocket.ir/images/cover/2023/12/1/bfXiSAuUHdHj6jI8sUsQx0j7MdTGRd3zF4O3Lyzc.jpg",
      title: "CSS",
      details:
        "CSS lets you stylize web pages and create unique layouts. If you’re curious about web development or just want a website that converts better, this course will give you the foundation to make webpages your own.",
    },
    {
      img: "https://static.roocket.ir/images/cover/2023/12/1/PC4ll4Qk1a5vZt7ZiEsOdO1xUGNqOoAbOgs1dkPN.jpg",
      title: "JavaScript",
      details:
        "JS powers apps, interactive websites, and even virtual reality. Plus this flexible language is easy on coding beginners. By the end of this course, you’ll know the fundamentals of JavaScript. . .even if you’ve never coded before!",
    },
    {
      img: "https://static.roocket.ir/images/cover/2023/12/1/AHdFfhfzPyAoXb54xDt9GFsJoWx6TVGQvjPNcgoz.jpg",
      title: "Web Development ",
      details:
        "Web Development is the foundation of modern websites and applications. This course covers HTML, CSS, and JavaScript, the core technologies for building interactive and responsive web pages.",
    },
    {
      img: "https://static.roocket.ir/images/cover/2023/12/1/qznBceILvXYoL9FQgtBVgHt2IPPXC1Jt5pNGlSpZ.jpg",
      title: "Python",
      details:
        "What do Intel, NASA, and Spotify have in common? They all use Python. It's versatile, easy to read, and used for everything from data analysis to games. Plus it's the most popular language for machine learning and AI.",
    },
    {
      img: "https://static.roocket.ir/images/cover/2023/12/1/g8SpudzfINgcX72k0udFcmO6x9GgeTlaB0nzveqk.jpg",
      title: "Angular",
      details:
        "Google has asked us to train Angular developers, so we've teamed up and co-developed this free course to get you qualified in Google's code of choice!",
    },
    {
      img: "https://static.roocket.ir/images/cover/2023/12/1/Egpu9S7uNRnT74ce3escCFvJG870Gz9dh7bsazfW.jpg",
      title: "React",
      details:
        "Tens of thousands of companies use Java to build everything from apps to game consoles. Our painless, bite-sized lessons will teach you the fundamentals you need to start a promising career.",
    },
    {
      img: "https://static.roocket.ir/images/cover/2023/12/1/CW58Z0oVk6n7UrKwW60unJPc9wMZtoOyzp9JMhU2.jpg",
      title: "Vue",
      details:
        "Learn one of the most in-demand languages for backend developers and senior software engineers. Our free and fun C# course is the best way to take advantage of all the opportunities this language offers.",
    },
  ];
  return (
    <>
      <div className="bg-zinc-800 py-10">
        <div className="container mx-auto">
          <div className="flex justify-between my-2 p-3">
            <h3 className="text-2xl font-bold text-yellow-400">Our popular courses</h3>
            <a className="text-yellow-400 border border-yellow-400 rounded-md px-5 py-2 hover:text-white hover:border-white duration-500" href="#">view all</a>
          </div>
          <hr />
          <div className="grid grid-cols-12 gap-3">
            {postsList.map((item, index) => (
              <PostsItem key={index} post={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
