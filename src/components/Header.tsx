import Button from "./Button";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <header
      className="flex relative flex-wrap gap-5 justify-between items-start self-center w-full font-medium text-white"
    >
      <Nav />
      <div className="flex gap-2.5 mr-16">
        <Button
          text="Contact sales"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a5948419154868ffda52eb149fb5754efd6968168a376278e1b104c880d8f889?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014"
        />
        <Button
          text="Sign in"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b387724d78259ac1bcd69ff9c0b6a8e6f90a4009bb3d3164bd9de95270213dc0?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014"
          variant="outline"
        />
      </div>
    </header>
  );
};

export default Header;
