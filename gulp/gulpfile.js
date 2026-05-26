// Primera sección: Imports.
import { series, task, src, dest, parallel } from "gulp";
import babel from "gulp-babel";
import concat from 'gulp-concat'; 
import uglify from "gulp-uglify";
import cleanCSS from 'gulp-clean-css';

// Segunda sección: Tareas.
function task_1(done)
{
    console.log("*** Hola desde Gulp. ***");
    done();
}

function task_2(done)
{
    console.log("*** Segundo Hola desde Gulp. ***");
    done();
}

function jsTransform() {
    const babelOptions = { presets: ["@babel/preset-env"] };
   
    return src("src/**/*.js")
        .pipe(babel(babelOptions))
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        .pipe(dest("dist"));
}

function minifyCss() {
    return src("src/**/*.css")
        .pipe(cleanCSS())
        .pipe(dest("dist"));
}

// Tercera sección: Exportación.
export { task_1, task_2, jsTransform }; // npx gulp task_1
export default parallel(jsTransform, minifyCss); // npx gulp