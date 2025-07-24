import LaunchIcon from "@mui/icons-material/Launch";
import {
  Box,
  Chip,
  Grid,
  IconButton,
  Modal,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ProjectsListType } from "../../@types/ProjectsListType";
import { projs } from "../../data/ProjectsList";

interface ProjectModalProps {
  selectedProject: ProjectsListType | null;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<ProjectsListType | null>
  >;
}

const ProjectModal = ({
  selectedProject,
  setSelectedProject,
}: ProjectModalProps) => {
  return (
    <Modal
      className={"project-modal"}
      open={selectedProject !== null}
      onClose={() => {
        setSelectedProject(null);
      }}
    >
      <Box className="project-box">
        <Grid container spacing={2}>
          <Grid size={{ md: 12, lg: 6 }}>
            <img
              src={`coding/${selectedProject?.image}`}
              width="100%"
              alt={selectedProject?.title}
            />
          </Grid>

          <Grid size={{ md: 12, lg: 6 }}>
            <a
              className="text-light fs-2 text-no-decoration"
              href={selectedProject ? selectedProject.link : "#"}
              target="_blank"
            >
              {selectedProject?.title}{" "}
              <IconButton
                sx={{ color: "secondary.main" }}
                onClick={() => {
                  if (selectedProject) {
                    const link = document.createElement("a");
                    link.href = selectedProject.link;
                    link.target = "_blank";
                    link.click();
                  }
                }}
              >
                <LaunchIcon />
              </IconButton>
            </a>

            <Stack direction="row" spacing={2}>
              {selectedProject?.tags.map((tag) => {
                return <Chip label={tag.alt} color="primary" />;
              })}
            </Stack>
          </Grid>
        </Grid>

        {selectedProject ? <selectedProject.description /> : <></>}
      </Box>
    </Modal>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectsListType | null>(null);

  const [tabIndex, setTabIndex] = useState<number>(0);
  const [tab, setTab] = useState<string>("web");

  const handleTabChange: (
    event: React.SyntheticEvent,
    newValue: number
  ) => void = (event, newValue) => {
    let newTab = "web";
    setTabIndex(newValue);
    switch (newValue) {
      case 1:
        newTab = "games";
        break;
      case 2:
        newTab = "other";
        break;
      default:
        newTab = "web";
        break;
    }
    setTab(newTab);
  };

  return (
    <Box id="projects" className="projects-section" sx={{ mt: "40px" }}>
      <Typography variant="h4" sx={{ mb: "40px" }}>
        Projects
      </Typography>
      <Tabs
        className="tabs"
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="basic tabs example"
      >
        <Tab
          className="tab"
          label="Websites"
          id="simple-tab-0"
          aria-controls="simple-tabpanel-0"
        />
        <Tab
          className="tab"
          label="Games"
          id="simple-tab-1"
          aria-controls="simple-tabpanel-1"
        />
        {/* <Tab
        className="tab"
          label="Other"
          id="simple-tab-2"
          aria-controls="simple-tabpanel-2"
        /> */}
      </Tabs>
      <Grid container spacing={2} className="tabPanel">
        {projs[tab]
          .filter((p) => {
            return p.active;
          })
          .map((p, index) => {
            return (
              <Grid size={{ md: 6, lg: 4 }} key={index}>
                <div
                  className="project-card"
                  style={{
                    background: `url("/coding/${p.image}")`,
                    backgroundSize: "cover",
                  }}
                  onClick={() => {
                    // if (selectedProject && selectedProject.title === p.title) {
                    //   setSelectedProject(null);
                    // } else {
                    //   setSelectedProject(p);
                    // }
                  }}
                >
                  <Grid container>
                    <Grid size={12}>
                      <h2>
                        {p.title}
                        <IconButton
                          sx={{ color: "secondary.main" }}
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = p.link;
                            link.target = "_blank";
                            link.click();
                          }}
                        >
                          <LaunchIcon />
                        </IconButton>
                      </h2>
                    </Grid>
                    <Grid size={12}>
                      <p>{p.short_description}</p>
                    </Grid>
                    <Grid size={12}>
                      <Grid container rowGap={2}>
                        {p.tags.map((tag) => {
                          return (
                            <Grid size={{ md: 2, sm: 2, xs: 12 }}>
                              <Chip label={tag.alt} color="primary" />
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            );
          })}
      </Grid>
      <ProjectModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </Box>
  );
};
export default Projects;
