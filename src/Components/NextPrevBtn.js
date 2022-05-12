import React from "react";

const NextPrevBtn = ({prevUrl,nextUrl,goNext, goPrev})=>{
    return (
        <div className="btn-group" data-testid="nextprev">
          {prevUrl && (
            <button
              onClick={goPrev}
            >
              Previous
            </button>
          )}

          {nextUrl && (
            <button
              onClick={goNext}
            >
              Next
            </button>
          )}
        </div>
    )
}
export default NextPrevBtn;