import { useThemeContext } from "@contexts/themeContext";
import themeColors from "@utils/theme";

interface Props {
  background?: string;
  size: number;
}

const Logo = (props: Props): JSX.Element => {
  const { theme } = useThemeContext();
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 603 604"
      width={size}
      height={size}
    >
      <path
        d="M487.143 110.934c-165.6 0-300 134.4-300 300s134.4 300 300 300 300-134.4 300-300-134.4-300-300-300zm-14.158 24.872c.168-.008.341.008.51 0l1.275 20.344c-17.303.825-34.144 3.349-50.382 7.462l5.038 19.834c-42.622 10.796-80.585 33.242-110.332 63.776l-14.604-14.286c-11.878 12.186-22.498 25.572-31.76 39.924l-17.092-11.289c46.68-72.177 126.195-121.14 217.347-125.765zm27.806 0c91.363 4.47 171.09 53.454 217.857 125.765l-17.092 11.289c-9.242-14.316-19.851-27.7-31.696-39.86l-14.605 14.222c-29.75-30.55-67.759-52.976-110.395-63.776l5.038-19.834c-16.238-4.113-33.08-6.637-50.383-7.462l1.276-20.344zm-13.648 89.924c8.673-.02 17.347.51 24.49 1.53l-11.161 92.857c23.46 3.421 44.028 15.7 58.227 33.355l74.49-55.867c9.048 11.271 19.305 28.954 24.68 42.346l-85.586 36.608a91.35 91.35 0 0 1 6.697 34.375c0 11.72-2.18 22.918-6.187 33.227l84.886 36.288c-5.238 13.472-15.389 31.123-24.299 42.474l-73.98-55.357c-14.18 18.06-34.984 30.67-58.737 34.184l10.97 91.326c-14.286 2.2-34.694 2.169-48.98.128l10.97-91.454c-23.77-3.516-44.557-16.167-58.738-34.248l-73.788 55.358c-9.048-11.272-19.306-28.955-24.681-42.347l85.076-36.416c-3.994-10.293-6.186-21.465-6.186-33.163 0-12.186 2.38-23.796 6.697-34.44l-85.396-36.479c5.238-13.471 15.388-31.123 24.299-42.474l74.68 55.93c14.2-17.655 34.768-29.933 58.228-33.354l-11.16-92.73c7.142-1.1 15.815-1.638 24.489-1.657zM241.99 285.168l18.367 9.056c-7.747 15.019-14.08 30.875-18.75 47.45l19.643 5.548a234.562 234.562 0 0 0-8.801 63.712c0 22.105 3.08 43.492 8.801 63.775l-19.643 5.549c4.666 16.547 11.013 32.39 18.75 47.385l-18.367 9.056c-19.398-37.711-30.357-80.465-30.357-125.765 0-45.301 10.959-88.054 30.357-125.766zm490.306 0c19.398 37.712 30.357 80.465 30.357 125.766 0 45.3-10.959 88.054-30.357 125.765l-18.367-9.056c7.74-15 14.082-30.832 18.75-47.385l-19.643-5.549c5.72-20.283 8.8-41.67 8.8-63.775 0-22.084-3.09-43.447-8.8-63.712l19.643-5.549c-4.669-16.57-11.007-32.434-18.75-47.449l18.367-9.056zM272.73 549.008c9.266 14.351 19.881 27.737 31.76 39.923l14.604-14.286c29.747 30.534 67.71 52.98 110.332 63.776l-5.038 19.834c16.238 4.113 33.08 6.637 50.382 7.462l-1.275 20.344c-91.364-4.47-171.09-53.454-217.857-125.765l17.092-11.288zm428.89 0 17.028 11.288c-46.767 72.31-126.494 121.296-217.857 125.765l-1.276-20.344c17.304-.825 34.145-3.349 50.383-7.462l-5.038-19.834c42.636-10.8 80.644-33.225 110.395-63.776l14.605 14.222a256.462 256.462 0 0 0 31.76-39.86z"
        style={{
          opacity: 1,
          fill: theme === "dark" ? themeColors.red[500] : "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3,
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 1.8,
          strokeOpacity: 1,
          display: "inline",
        }}
        transform="translate(-187.143 -110.934)"
      />
    </svg>
  );
};

export default Logo;