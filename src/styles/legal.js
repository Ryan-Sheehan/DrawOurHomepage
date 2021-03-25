/* styles.js */
import css from "styled-jsx/css";

export default css`
html {
  font-size: 18px;
  color: #262626;
}

h2 {
  margin-top: 3rem;
}
p {
  color: #8b8b8b;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
}

li {
  color: #8b8b8b;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.bold {
  font-weight: 700; 
  color: #262626;
}
.spacing-bottom {
  margin-bottom: 4rem;
  }
body {
  margin: 0;
  padding: 0;
  font-family: "Manrope", sans-serif;
}

.terms {
  margin-left: 2rem;
  margin-right: 2rem;
}

​.bold {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  color: #262626;
}
.link {
  color: blue;
  font-weight: 600;
  cursor: pointer;
}
.header {
  background-color: #cbf69f;
  height: 6em;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}
#logo {
  margin-left: 2rem;
  margin-top: 1rem;
}

@media only screen and (min-width: 768px) {
  .terms {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  #logo {
    margin-left: 4rem;
    margin-top: 1rem;
  }
}
`;