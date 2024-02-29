use clap::Parser;
use glob::glob;
use convert_case::{Casing, Case};

#[derive(Parser)]
struct Cli {
    /// Path to RemixIcon icons directory
    #[arg(short, long, value_name = "DIR")]
    input: String,

    /// Path to output icons components
    #[arg(short, long, value_name = "DIR")]
    output: String,

    /// Path to template file
    #[arg(short, long, value_name = "FILE")]
    template: String,
}

struct Icon {
    name: String,
    file_name: String,
    output_path: String,
}

fn main() {
    let cli = Cli::parse();

    let template_path = cli.template;
    let template_content = get_template_content(&template_path);
    let icons = get_icons(&cli.input, &cli.output);

    generate_components(
        &template_content,
        &icons,
    );

    generate_index_file(&icons, &cli.output);

    println!("Generated {} icons!", icons.len());
}

fn generate_index_file(icons: &Vec<Icon>, output_path: &String) {
    let mut index_data = String::new();

    for icon in icons.iter() {
        let export_line = format!("export * from './{}'\n", icon.file_name);
        index_data.push_str(export_line.as_str());
    }

    std::fs::write(
        format!("{}/index.ts", output_path),
        index_data,
    ).unwrap();
}

fn generate_components(
    template_content: &String,
    icons: &Vec<Icon>,
) {
    for icon in icons.iter() {
        let component_data = generate_component_by_icon(template_content, icon);
        store_component(&component_data, icon);
    }
}

fn store_component(component_data: &String, icon: &Icon) {
    std::fs::write(
        icon.output_path.to_owned(),
        component_data,
    ).unwrap();
}

fn generate_component_by_icon(template_content: &String, icon: &Icon) -> String {
    let component_data = template_content.replace(
        "RiIconTemplate",
        format!("ri-{}", icon.name.to_owned()).to_case(Case::Pascal).as_str()
    );

    let component_data = component_data.replace(
        "ri-class-name",
        format!("ri-{}", icon.name.to_owned()).as_str()
    );

    component_data
}

fn get_template_content(path: &String) -> String {
    std::fs::read_to_string(path).unwrap()
}

fn get_icons(input_path: &String, output_path: &String) -> Vec<Icon> {
    let path_icons = format!("{}/**/*.svg", input_path);
    let mut icons: Vec<Icon> = Vec::new();

    for entry in glob(&path_icons).unwrap() {
        if let Ok(mut path) = entry {
            path.set_extension("");
            let name = path.file_name().unwrap()
                .to_str().unwrap()
                .to_string();

            let file_name = format!("Ri{}", name.to_case(Case::Pascal));
            let output_path = format!("{}/{}.tsx", output_path, file_name);

            icons.push(Icon {
                name, file_name, output_path,
            });
        }
    }

    icons
}
