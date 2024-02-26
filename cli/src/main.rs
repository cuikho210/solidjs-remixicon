use clap::Parser;
use std::path::PathBuf;

#[derive(Parser)]
struct Cli {
    /// Path to RemixIcon repository
    path: Option<PathBuf>,
}

fn main() {
    let cli = Cli::parse();

    if let Some(path) = cli.path.as_ref() {
        println!("{}", path.display());
    }
}
