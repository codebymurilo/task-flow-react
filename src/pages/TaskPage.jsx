import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-125 space-y-4">
        <div className="flex justify-center relative">
          <button
            className="absolute left-0 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
          <h2 className="text-2xl text-slate-800 font-semibold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
