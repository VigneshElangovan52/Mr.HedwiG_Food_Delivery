const Instamart = () => {
  return (
    <div className="py-2">
      <h1 className="mx-2 py-3 text-2xl font-bold text-center">Work in progress👨‍💻⚒📈</h1>
      <img className="mt-2 w-max h-96 m-auto rounded-2xl" src="https://www.shutterstock.com/shutterstock/photos/1735505120/display_1500/stock-photo-hand-putting-wooden-cube-on-virtual-infographic-rectangle-block-with-progress-wording-job-1735505120.jpg" alt="in-progress" />
      <p className=" m-2 pt-2">
        This component is created to practice lazy loading which will chunk off
        the large bundle.js file to multiple small chunks as required, thereby
        reducing the file weight and optimizing the app to make it
        manageable,testable and light 🚀
      </p>
    </div>
  );
};

export default Instamart;
