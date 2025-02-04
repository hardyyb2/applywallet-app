import { CreateNewSheetButton } from "./CreateNewSheetButton";
import { LinkSheetInput } from "./LinkSheetInput";

const NewUser = async () => {
  // TODO - check validations before sheet creation

  return (
    <div>
      <span>
        Your sheet has either been deleted or lost, if you think this is a
        mistake please provide a link to the your applywallet database sheet
      </span>
      <LinkSheetInput />
      <span>-OR-</span>
      <CreateNewSheetButton />
    </div>
  );
};

export default NewUser;
