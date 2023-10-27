"use client";

export const projectSingle = () => {
    return (
        <div className="mb-0 border rounded-md p-2">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              {/* img */}
              <a href="#!">
                <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]" />
              </a>
            </div>
            <h5 className="mb-4 text-lg font-bold">
                {/* title */}
            </h5>
            <div className="mb-4 flex items-center justify-center text-sm font-medium text-warning lg:justify-start">
              {/* icons  */}
            </div>
            <p className="text-neutral-500 dark:text-neutral-300">
              {/* desc */}
            </p>
          </div>
    )
}