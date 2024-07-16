module.exports = (req,res,next) => {
    // 플래시 메시지가 있다면 컨텍스트에 전달하고 내용을 비운다.
    res.locals.flash = req.session.flash;
    delete req.session.flash;
    next();
}