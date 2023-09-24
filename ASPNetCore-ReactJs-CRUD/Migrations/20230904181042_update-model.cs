using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ASPNetCore_ReactJs_CRUD.Migrations
{
    /// <inheritdoc />
    public partial class updatemodel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ValidFromDate",
                table: "CreditCard",
                newName: "ValidFromDateYear");

            migrationBuilder.RenameColumn(
                name: "ValidExpiryDate",
                table: "CreditCard",
                newName: "ValidFromDateMonth");

            migrationBuilder.AddColumn<string>(
                name: "ValidExpiryDateMonth",
                table: "CreditCard",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ValidExpiryDateYear",
                table: "CreditCard",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ValidExpiryDateMonth",
                table: "CreditCard");

            migrationBuilder.DropColumn(
                name: "ValidExpiryDateYear",
                table: "CreditCard");

            migrationBuilder.RenameColumn(
                name: "ValidFromDateYear",
                table: "CreditCard",
                newName: "ValidFromDate");

            migrationBuilder.RenameColumn(
                name: "ValidFromDateMonth",
                table: "CreditCard",
                newName: "ValidExpiryDate");
        }
    }
}
