import { series, task, src, dest } from "gulp";
import babel from "gulp-babel";

function task_1(done)
{
    console.log("*** Hola desde Gulp. ***");
    done();
}

function task_2(done)
{
    console.log("*** Hola desde Gulp otra vez. ***");
    done();
}

function babelTask() {
    const babelOptions = { presets: ["@babel/preset-env"] };
    
    return src("src/**/*.js")
        .pipe(babel(babelOptions))
        .pipe(dest("dest"));
}

export { task_1, task_2, babelTask };
export default series(task_1, task_2, babelTask);