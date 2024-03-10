import { app } from "./app";

const PORT: number = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`API successfully started on port ${PORT}`));
