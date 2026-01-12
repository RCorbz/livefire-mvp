{ pkgs, ... }:
{
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # Or "unstable"
  # Use https://search.nixos.org/packages to find packages.
  packages = [
    pkgs.nodejs_20
  ];
  # Sets environment variables in the workspace.
  env = {};
  # Defines shell aliases.
  # startup.pre-build = "echo \"This will run before your IDE is built.\"";
  # startup.post-start = "echo \"This will run after your IDE starts.\"";
  # startup.post-attach = "echo \"This will run after you attach to your workspace.\"";
}
