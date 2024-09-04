**Instrucciones:**

1. **Configuración del Entorno de Trabajo:**
    - Navega a la carpeta `js-exc` en tu repositorio local.
    - Dentro de esta carpeta, crea una nueva carpeta con tu nombre y apellido en formato `name-lastname`. Por ejemplo, si tu nombre es Juan Pérez, deberías crear la carpeta `juan-perez`:

    ```bash
    mkdir js-exc/name-lastname

    ```

    Reemplaza `name-lastname` con tu nombre y apellido en minúsculas y sin espacios.


2. **Creación de una Rama de Trabajo:**
    - Asegúrate de que tu repositorio local esté actualizado con la rama `main` del repositorio remoto.
    - Crea una nueva rama para trabajar en esta actividad utilizando el siguiente formato de nombre de rama:

    ```bash
    git checkout main

    git pull origin main

    git checkout -b bugfix/js-exc-tu-nombre-tu-apellido

    ```

    Reemplaza `tu-nombre-tu-apellido` con tu nombre y apellido.

4. **Resolver los Ejercicios del Classroom:**
    - Completa cada uno de los ejercicios del classroom de **Bug Fixes**. Tómate tu tiempo para entender cada concepto.
    - A medida que completes cada ejercicio, realiza un commit en tu rama de trabajo con un mensaje siguiendo la convención de **Git**:

    ```
    fix: solution [exercise name]

    ```

    Por ejemplo, si estás resolviendo el primer ejercicio llamado "manipulación de arreglos", tu commit debería verse así:

    ```bash
    git add .
    git commit -m "fix: solution manipulación de arreglos"

    ```

5. **Subir Cambios a GitHub:**
    - Una vez que hayas completado todos los ejercicios, sube tu rama de trabajo al repositorio remoto en GitHub:

    ```bash
    git push origin bugfix/js-exc-tu-nombre-tu-apellido

    ```

6. **Crear un Pull Request (PR):**
    - Ve a GitHub y navega a tu repositorio.
    - Crea un **Pull Request** (PR) desde tu rama `bugfix/js-exc-tu-nombre-tu-apellido` hacia la rama `main`.
    - En el PR, asegúrate de incluir una breve descripción de lo que has hecho y marca a un compañero o a un mentor para revisión.
7. **Revisión y Feedback:**
    - Una vez que envíes tu PR, tu código será revisado por un compañero o mentor.
    - Responde a los comentarios de revisión, realiza los cambios necesarios y sigue las instrucciones para completar la integración de tu trabajo en la rama `main`.
    - Comparte como respuesta a esta misión el enlace al PR en GitHub.


**Fecha de entrega:** Al final del día de hoy.
