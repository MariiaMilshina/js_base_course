/*9. Давайте произведём 5 операций с массивом.
			9.1 Создайте массив styles с элементами «Джаз» и «Блюз».
			9.2 Добавьте «Рок-н-ролл» в конец.
			9.3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
			9.4 Удалите первый элемент массива и покажите его.
			9.5 Вставьте «Рэп» и «Регги» в начало массива.*/

            var styles = ["Джаз", "Блюз"];

            styles.push("Рок-н-ролл");

            console.log("Push: " + styles);



            var middleArray = Math.floor(styles.lenght / 2);

           console.log(Math.floor(middleArray));
            
            styles[middleArray] = "Классика";

            console.log("Change: " + styles);



            var firstEl = styles.shift(); 

            console.log("Shift: " + styles);

            styles.unshift("Рэп", "Регги");

            console.log("Unshift: " + styles);

