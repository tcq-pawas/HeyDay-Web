import { FaArrowLeft } from "react-icons/fa";

/**
 * Reusable gallery component used by both the Image and sVideo tabs.
 *
 * Props:
 * - projects: array of { id, title, cover, images? , videos? }
 * - mediaKey: "images" | "videos" — which field on each project holds the media items
 * - selectedProject / onSelectProject / onBack: lifted state from the parent
 */
const ProjectGallery = ({
  projects,
  mediaKey,
  selectedProject,
  onSelectProject,
  onBack,
}) => {
  // ---- Project cards (no project selected yet) ----
  if (selectedProject === null) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <div className="absolute bottom-5 left-5">
              <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full">
                {project.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ---- Selected project's media gallery ----
  const mediaItems = selectedProject[mediaKey] || [];

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#b66a1d] font-medium text-sm mb-6 hover:underline"
      >
        <FaArrowLeft className="text-xs" />
        Back to Projects
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaKey === "images"
          ? mediaItems.map((img, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`${selectedProject.title} ${index + 1}`}
                  className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute bottom-5 left-5">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full">
                    {selectedProject.title}
                  </span>
                </div>
              </div>
            ))
          : mediaItems.map((video, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                <video
                  controls
                  poster={video.poster}
                  className="w-full h-[250px] object-cover rounded-2xl"
                >
                  {video.url && <source src={video.url} />}
                </video>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
