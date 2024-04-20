import News from "./News";
import reactLogo from '../../assets/react.svg';

/** Список новостей */
export default function NewsList() {
  return (
    <div>
      <News
        img={reactLogo}
        href="https://vitejs.dev"
      >text content 1</News>
      <News
        img={reactLogo}
        href="https://vitejs.dev"
      >text content 1</News>
      <News
        img={reactLogo}
        href="https://vitejs.dev"
      >text content 1</News>
      <News
        img={reactLogo}
        href="https://vitejs.dev"
      >text content 1</News>

    </div>
  );
}
