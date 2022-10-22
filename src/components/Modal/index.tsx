import { FC, PropsWithChildren } from "react";
import ReactModal from "react-modal";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement("#root");
const Modal: FC<PropsWithChildren<{ isOpen: boolean; Close?: Function }>> = ({
  isOpen,
  children,
  Close,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className="w-full h-full left-0 fixed  border-none flex items-center justify-center"
      overlayClassName="w-full fixed h-full bg-black bg-opacity-20	 top-0 left-0 border-none z-50"
      contentLabel="Example Modal"
    >
      <div className="flex lg:w-4/5 xl:w-2/5 md:w-4/5  w-full shadow-lg md:rounded-xl bg-white h-full md:h-3/5 py-20 relative">
        <button
          className="absolute top-2 right-4 text-xl"
          onClick={() => Close && Close()}
        >
          X
        </button>
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
