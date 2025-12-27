import jwt from 'jsonwebtoken'

export const isAuthenticated = (req, res, next) => {
     try {
        let token = req.cookies['token'];

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized User Found' });
        }

        let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error || "something went wrong")
    }

}

export const isAuthorized = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return res.status(401).json({
                message: "Unauthorized User"
            })
        }
        next();
    }

}