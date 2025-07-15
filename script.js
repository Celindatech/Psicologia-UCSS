// script.js
const cursos = [
  // 1er año - Ciclo I
  { nombre: "Biología", codigo: "BIO", tipo: "O", creditos: 3, requisitos: [], ciclo: 1, año: 1 },
  { nombre: "Historia de la Psicología", codigo: "HPSI", tipo: "O", creditos: 4, requisitos: [], ciclo: 1, año: 1 },
  { nombre: "Actividades I", codigo: "ACT1", tipo: "O", creditos: 1, requisitos: [], ciclo: 1, año: 1 },
  { nombre: "Lengua: Comunicación escrita académica", codigo: "LENG", tipo: "O", creditos: 5, requisitos: [], ciclo: 1, año: 1 },
  { nombre: "Antropología Religiosa", codigo: "ANTREL", tipo: "O", creditos: 4, requisitos: [], ciclo: 1, año: 1 },
  { nombre: "Conceptos Matemáticos", codigo: "MAT", tipo: "O", creditos: 3, requisitos: [], ciclo: 1, año: 1 },
  { nombre: "Inglés I", codigo: "ING1", tipo: "O", creditos: 1, requisitos: [], ciclo: 1, año: 1 },

  // 1er año - Ciclo II
  { nombre: "Neurociencias", codigo: "NCS", tipo: "O", creditos: 4, requisitos: ["BIO"], ciclo: 2, año: 1 },
  { nombre: "Psicología General", codigo: "PG", tipo: "O", creditos: 4, requisitos: ["HPSI"], ciclo: 2, año: 1 },
  { nombre: "Psicología y Dinámica de Grupo", codigo: "PDG", tipo: "O", creditos: 3, requisitos: ["HPSI"], ciclo: 2, año: 1 },
  { nombre: "Redacción Académica", codigo: "REDAC", tipo: "O", creditos: 5, requisitos: ["LENG"], ciclo: 2, año: 1 },
  { nombre: "Teología I", codigo: "TEO1", tipo: "O", creditos: 4, requisitos: ["ANTREL"], ciclo: 2, año: 1 },
  { nombre: "Inglés II", codigo: "ING2", tipo: "O", creditos: 1, requisitos: [], ciclo: 2, año: 1 },

  // 2do año - Ciclo III
  { nombre: "Psicofisiología", codigo: "PSI", tipo: "O", creditos: 4, requisitos: ["NCS"], ciclo: 3, año: 2 },
  { nombre: "Psicología de la Personalidad", codigo: "PERS", tipo: "O", creditos: 4, requisitos: ["PG"], ciclo: 3, año: 2 },
  { nombre: "Psicología del Desarrollo Cognitivo", codigo: "PDC", tipo: "O", creditos: 3, requisitos: ["PG"], ciclo: 3, año: 2 },
  { nombre: "Psicología del Desarrollo Socio Afectivo", codigo: "PDSA", tipo: "O", creditos: 3, requisitos: ["PG"], ciclo: 3, año: 2 },
  { nombre: "Teología II", codigo: "TEO2", tipo: "O", creditos: 4, requisitos: ["TEO1"], ciclo: 3, año: 2 },
  { nombre: "Estadística Aplicada", codigo: "EST", tipo: "O", creditos: 3, requisitos: ["MAT"], ciclo: 3, año: 2 },
  { nombre: "Inglés III", codigo: "ING3", tipo: "O", creditos: 1, requisitos: [], ciclo: 3, año: 2 },

  // 2do año - Ciclo IV
  { nombre: "Neuropsicología", codigo: "NPSI", tipo: "O", creditos: 3, requisitos: ["PSI"], ciclo: 4, año: 2 },
  { nombre: "Técnicas de Entrevista y Observación", codigo: "TEO", tipo: "O", creditos: 3, requisitos: ["PG"], ciclo: 4, año: 2 },
  { nombre: "Psicología Humanista", codigo: "PHUM", tipo: "O", creditos: 3, requisitos: ["PERS"], ciclo: 4, año: 2 },
  { nombre: "Psicología Dinámica", codigo: "PDIN", tipo: "O", creditos: 3, requisitos: ["PERS"], ciclo: 4, año: 2 },
  { nombre: "Test Psicométricos de Eficiencia", codigo: "TPEF", tipo: "O", creditos: 3, requisitos: ["PDC"], ciclo: 4, año: 2 },
  { nombre: "Ética, Deontología y Bioética", codigo: "ETICA", tipo: "O", creditos: 4, requisitos: ["TEO2"], ciclo: 4, año: 2 },
  { nombre: "Inglés IV", codigo: "ING4", tipo: "O", creditos: 1, requisitos: [], ciclo: 4, año: 2 },
];
// 3er año - Ciclo V
cursos.push(
  { nombre: "Psicopatología General", codigo: "PPG", tipo: "O", creditos: 3, requisitos: ["NPSI", "PERS"], ciclo: 5, año: 3 },
  { nombre: "Evaluación Neuropsicológica", codigo: "EN", tipo: "O", creditos: 3, requisitos: ["NPSI"], ciclo: 5, año: 3 },
  { nombre: "Test Psicométricos de Personalidad", codigo: "TPP", tipo: "O", creditos: 3, requisitos: ["TEO", "PERS"], ciclo: 5, año: 3 },
  { nombre: "Psicología Educativa", codigo: "PE", tipo: "O", creditos: 3, requisitos: ["TPEF", "TEO"], ciclo: 5, año: 3 },
  { nombre: "Técnicas de Modificación de Conducta", codigo: "TMC", tipo: "O", creditos: 3, requisitos: ["PDSA", "TEO"], ciclo: 5, año: 3 },
  { nombre: "Metodología de la Investigación", codigo: "METINV", tipo: "O", creditos: 4, requisitos: ["EST"], ciclo: 5, año: 3 },
  { nombre: "Inglés V", codigo: "ING5", tipo: "O", creditos: 1, requisitos: [], ciclo: 5, año: 3 }
);

// 3er año - Ciclo VI
cursos.push(
  { nombre: "Psicopatología Avanzada", codigo: "PPA", tipo: "O", creditos: 3, requisitos: ["PPG"], ciclo: 6, año: 3 },
  { nombre: "Psicología Preventiva", codigo: "PPRV", tipo: "O", creditos: 3, requisitos: ["PPG"], ciclo: 6, año: 3 },
  { nombre: "Técnicas Proyectivas", codigo: "TPRO", tipo: "O", creditos: 3, requisitos: ["TPP", "PDIN"], ciclo: 6, año: 3 },
  { nombre: "Psicolingüística", codigo: "PSL", tipo: "O", creditos: 3, requisitos: ["PE"], ciclo: 6, año: 3 },
  { nombre: "Psicología en el Ámbito Familiar", codigo: "PAF", tipo: "O", creditos: 4, requisitos: ["TMC", "PDG"], ciclo: 6, año: 3 },
  { nombre: "Seminario de Investigación I", codigo: "SEM1", tipo: "O", creditos: 4, requisitos: ["METINV"], ciclo: 6, año: 3 },
  { nombre: "Inglés VI", codigo: "ING6", tipo: "O", creditos: 1, requisitos: [], ciclo: 6, año: 3 }
);

// 4to año - Ciclo VII
cursos.push(
  { nombre: "Diagnóstico e Informe Psicológico", codigo: "DIP", tipo: "O", creditos: 3, requisitos: ["PPA", "TPRO"], ciclo: 7, año: 4 },
  { nombre: "Psicología de la Salud", codigo: "PSA", tipo: "O", creditos: 3, requisitos: ["PPRV"], ciclo: 7, año: 4 },
  { nombre: "Psicología Social y Comunitaria", codigo: "PSC", tipo: "O", creditos: 3, requisitos: ["PPRV"], ciclo: 7, año: 4 },
  { nombre: "Psicología de la Organización y del Trabajo", codigo: "POT", tipo: "O", creditos: 3, requisitos: ["TPRO"], ciclo: 7, año: 4 },
  { nombre: "Tutoría y Consejería Educativa", codigo: "TCE", tipo: "O", creditos: 3, requisitos: ["PSL"], ciclo: 7, año: 4 },
  { nombre: "Psicología de la Afectividad y de la Sexualidad", codigo: "PAS", tipo: "O", creditos: 3, requisitos: ["PAF", "PDSA"], ciclo: 7, año: 4 },
  { nombre: "Lengua Nativa", codigo: "LN", tipo: "E", creditos: 3, requisitos: [], ciclo: 7, año: 4 },
  { nombre: "Inglés VII", codigo: "ING7", tipo: "O", creditos: 1, requisitos: [], ciclo: 7, año: 4 }
);
// 4to año - Ciclo VIII
cursos.push(
  { nombre: "Psicología Clínica", codigo: "PCL", tipo: "O", creditos: 3, requisitos: ["DIP", "PPA", "PSA"], ciclo: 8, año: 4 },
  { nombre: "Psicoterapia Infantil y del Adolescente", codigo: "PIA", tipo: "O", creditos: 3, requisitos: ["DIP"], ciclo: 8, año: 4 },
  { nombre: "Psicoterapia Cognitiva", codigo: "PCOG", tipo: "O", creditos: 3, requisitos: ["DIP"], ciclo: 8, año: 4 },
  { nombre: "Terapia Familiar", codigo: "TFAM", tipo: "O", creditos: 3, requisitos: ["PSA"], ciclo: 8, año: 4 },
  { nombre: "Gestión de los Recursos Humanos", codigo: "GRH", tipo: "O", creditos: 3, requisitos: ["POT"], ciclo: 8, año: 4 },
  { nombre: "Psicología de la Inclusión educativa y Social", codigo: "PIES", tipo: "O", creditos: 3, requisitos: ["TCE"], ciclo: 8, año: 4 },
  { nombre: "Seminario de Investigación II", codigo: "SEM2", tipo: "O", creditos: 6, requisitos: ["SEM1"], ciclo: 8, año: 4 },
  { nombre: "Inglés VIII", codigo: "ING8", tipo: "O", creditos: 1, requisitos: [], ciclo: 8, año: 4 }
);

// 5to año - Ciclo IX
cursos.push(
  { nombre: "Psicología de las Adicciones", codigo: "PAD", tipo: "O", creditos: 3, requisitos: ["PCL"], ciclo: 9, año: 5 },
  { nombre: "Internado I", codigo: "INT1", tipo: "O", creditos: 22, requisitos: [], ciclo: 9, año: 5 },
  { nombre: "Inglés IX", codigo: "ING9", tipo: "O", creditos: 1, requisitos: [], ciclo: 9, año: 5 }
);

// 5to año - Ciclo X
cursos.push(
  { nombre: "Intervención Psicológica de las Enfermedades Crónicas y Oncológicas", codigo: "IPECO", tipo: "E", creditos: 3, requisitos: ["PCL"], ciclo: 10, año: 5 },
  { nombre: "Formulación y Evaluación de Proyectos Psicosociales", codigo: "FEPP", tipo: "E", creditos: 3, requisitos: ["PCL"], ciclo: 10, año: 5 },
  { nombre: "Internado II", codigo: "INT2", tipo: "O", creditos: 22, requisitos: ["INT1"], ciclo: 10, año: 5 },
  { nombre: "Curso de Trabajo de Investigación - Taller de Sustentación de Tesis", codigo: "TESIS", tipo: "O", creditos: 2, requisitos: ["SEM2"], ciclo: 10, año: 5 },
  { nombre: "Inglés X", codigo: "ING10", tipo: "O", creditos: 1, requisitos: [], ciclo: 10, año: 5 }
);
let aprobados = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  const años = [...new Set(cursos.map(c => c.año))];

  años.forEach(año => {
    const añoDiv = document.createElement("div");
    añoDiv.className = "año";

    const titulo = document.createElement("h2");
    titulo.textContent = `Año ${año}`;
    añoDiv.appendChild(titulo);

    const ciclos = cursos.filter(c => c.año === año)
                         .reduce((acc, c) => {
                           acc[c.ciclo] = acc[c.ciclo] || [];
                           acc[c.ciclo].push(c);
                           return acc;
                         }, {});

    Object.entries(ciclos).forEach(([ciclo, cursosCiclo]) => {
      const cicloDiv = document.createElement("div");
      cicloDiv.className = "ciclo";

      cursosCiclo.forEach(curso => {
        const div = document.createElement("div");
        div.className = "ramo bloqueado";
        div.dataset.codigo = curso.codigo;

        if (curso.tipo === "E") div.classList.add("electivo");

        div.innerHTML = `<strong>${curso.nombre}</strong><br>
                         <span class="creditos">${curso.creditos} créditos</span>`;

        div.addEventListener("click", () => {
          if (!div.classList.contains("bloqueado")) {
            div.classList.toggle("aprobado");
            if (div.classList.contains("aprobado")) {
              aprobados.add(curso.codigo);
            } else {
              aprobados.delete(curso.codigo);
            }
            actualizarEstadoCursos();
            verificarEgreso();
          }
        });

        cicloDiv.appendChild(div);
      });

      const subtitulo = document.createElement("h3");
      subtitulo.textContent = `Ciclo ${ciclo}`;
      añoDiv.appendChild(subtitulo);
      añoDiv.appendChild(cicloDiv);
    });

    contenedor.appendChild(añoDiv);
  });

  actualizarEstadoCursos();
}

function actualizarEstadoCursos() {
  cursos.forEach(curso => {
    const div = document.querySelector(`[data-codigo="${curso.codigo}"]`);
    const cumplidos = curso.requisitos.every(r => aprobados.has(r));

    if (cumplidos) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
      div.classList.remove("aprobado");
      aprobados.delete(curso.codigo);
    }
  });
}

function verificarEgreso() {
  const totalCreditos = cursos
    .filter(c => aprobados.has(c.codigo))
    .reduce((suma, c) => suma + c.creditos, 0);

  const electivosAprobados = cursos
    .filter(c => c.tipo === "E" && aprobados.has(c.codigo)).length;

  let footer = document.querySelector("footer");
  if (!footer) {
    footer = document.createElement("footer");
    document.body.appendChild(footer);
  }

  if (totalCreditos >= 226 && electivosAprobados >= 2) {
    footer.textContent = "✅ ¡Requisitos de egreso cumplidos! Puedes titularte 🎓";
  } else {
    footer.textContent = `Créditos: ${totalCreditos}/226 | Electivos aprobados: ${electivosAprobados}/2`;
  }
}

crearMalla();
