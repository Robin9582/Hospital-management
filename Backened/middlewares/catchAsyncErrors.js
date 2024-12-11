// export const catchAsyncErrors = (theFunction) => {
//     return (req, res, next) => {
//     Promise.resolve (theFunction(req, res)).catch(next);
//     };
// };

// catchAsyncErrors.js
export const catchAsyncErrors = (theFunction) => (req, res, next) => {
    Promise.resolve(theFunction(req, res, next)).catch(next);
};  

