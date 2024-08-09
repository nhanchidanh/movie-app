import { createContext, useState } from "react";

const MovieContext = createContext();

import Modal from "react-modal";

// Modal
const customStyles = {
  overlay: {
    positiom: "fixed",
    zIndex: 9999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MovieProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [urlMovie, setUrlMovie] = useState("");

  const handlPlayMovie = async (slug) => {
    setUrlMovie("");
    try {
      setIsOpen(true);
      const url = `https://phimapi.com/phim/${slug}`;

      const options = {
        method: "GET",
        Headers: {
          accept: "application/json",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      const link_embed = data?.episodes[0]?.server_data[0]?.link_embed;
      setUrlMovie(link_embed);
    } catch (error) {
      setIsOpen(false);
      console.log("error: ", error);
    }
  };

  return (
    <MovieContext.Provider value={{ handlPlayMovie }}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {urlMovie ? (
          <iframe
            width="750"
            height="500"
            src={urlMovie}
            title="YouTube video player"
            // frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          "Loading..."
        )}
      </Modal>
    </MovieContext.Provider>
  );
};


export {MovieProvider, MovieContext}