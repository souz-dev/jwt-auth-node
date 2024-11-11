interface Lead {
  id: string;
  name: string;
}

interface IListLeadsUseCase {
  execute(): Promise<Lead[]>;
}

class ListLeadsUseCase implements IListLeadsUseCase {
  async execute(): Promise<Lead[]> {
    return [
      { id: "1", name: "Hiago" },
      { id: "2", name: "Henrique" },
      { id: "3", name: "Souza" },
    ];
  }
}

export { ListLeadsUseCase, IListLeadsUseCase, Lead };
